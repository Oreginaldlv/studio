// src/ai/flows/generate-dispute-letter.ts
'use server';
/**
 * @fileOverview Generates a credit dispute letter using GenAI.
 *
 * - generateDisputeLetter - A function that generates a credit dispute letter.
 * - GenerateDisputeLetterInput - The input type for the generateDisputeLetter function.
 * - GenerateDisputeLetterOutput - The return type for the generateDisputeLetter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDisputeLetterInputSchema = z.object({
  creditReportDataUri: z
    .string()
    .describe(
      "A credit report, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  accountNumber: z.string().describe('The account number to dispute.'),
  reasonForDispute: z.string().describe('The reason for disputing the account.'),
});
export type GenerateDisputeLetterInput = z.infer<typeof GenerateDisputeLetterInputSchema>;

const GenerateDisputeLetterOutputSchema = z.object({
  disputeLetter: z.string().describe('The generated dispute letter.'),
});
export type GenerateDisputeLetterOutput = z.infer<typeof GenerateDisputeLetterOutputSchema>;

export async function generateDisputeLetter(input: GenerateDisputeLetterInput): Promise<GenerateDisputeLetterOutput> {
  return generateDisputeLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDisputeLetterPrompt',
  input: {schema: GenerateDisputeLetterInputSchema},
  output: {schema: GenerateDisputeLetterOutputSchema},
  prompt: `You are a credit repair expert. Generate a dispute letter based on the provided credit report and dispute details.

Credit Report Data: {{media url=creditReportDataUri}}
Account Number: {{{accountNumber}}}
Reason for Dispute: {{{reasonForDispute}}}

Write a professional and effective dispute letter to challenge the accuracy of the account.  Focus on the facts of the credit report provided.  Be polite but firm.  Make sure to include the account number and the reason for the dispute.

Dispute Letter:
`,
});

const generateDisputeLetterFlow = ai.defineFlow(
  {
    name: 'generateDisputeLetterFlow',
    inputSchema: GenerateDisputeLetterInputSchema,
    outputSchema: GenerateDisputeLetterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
