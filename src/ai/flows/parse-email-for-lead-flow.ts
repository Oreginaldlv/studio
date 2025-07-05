'use server';
/**
 * @fileOverview Parses email content to extract lead information using GenAI.
 *
 * - parseEmailForLead - A function that takes email content and returns structured lead data.
 * - ParseEmailForLeadInput - The input type for the parseEmailForLead function.
 * - ParseEmailForLeadOutput - The return type for the parseEmailForLead function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ParseEmailForLeadInputSchema = z.object({
  emailContent: z
    .string()
    .describe('The content of the email to parse for lead information.'),
});
export type ParseEmailForLeadInput = z.infer<typeof ParseEmailForLeadInputSchema>;

const ParseEmailForLeadOutputSchema = z.object({
  name: z.string().describe('The name of the lead.'),
  email: z.string().describe('The email address of the lead.'),
  phone: z.string().optional().describe('The phone number of the lead, if available.'),
  company: z.string().optional().describe('The company the lead works for, if available.'),
  details: z.string().optional().describe('Any other relevant details about the lead.'),
});
export type ParseEmailForLeadOutput = z.infer<typeof ParseEmailForLeadOutputSchema>;

export async function parseEmailForLead(input: ParseEmailForLeadInput): Promise<ParseEmailForLeadOutput> {
  return parseEmailForLeadFlow(input);
}

const prompt = ai.definePrompt({
  name: 'parseEmailForLeadPrompt',
  input: {schema: ParseEmailForLeadInputSchema},
  output: {schema: ParseEmailForLeadOutputSchema},
  prompt: `You are an AI assistant specialized in parsing email content to extract lead information.
  Given the following email content, extract the name, email, phone number (if available), company (if available), and any other relevant details about the lead.
  Return the information in JSON format.

  Email Content:
  {{emailContent}}`,
});

const parseEmailForLeadFlow = ai.defineFlow(
  {
    name: 'parseEmailForLeadFlow',
    inputSchema: ParseEmailForLeadInputSchema,
    outputSchema: ParseEmailForLeadOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
