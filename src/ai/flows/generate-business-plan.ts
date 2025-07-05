'use server';

/**
 * @fileOverview Generates a business plan for an aspiring entrepreneur.
 *
 * - generateBusinessPlan - A function that generates a business plan.
 * - GenerateBusinessPlanInput - The input type for the generateBusinessPlan function.
 * - GenerateBusinessPlanOutput - The return type for the generateBusinessPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBusinessPlanInputSchema = z.object({
  businessIdea: z
    .string()
    .describe('A brief description of the business idea.'),
  targetAudience: z
    .string()
    .describe('The target audience for the business.'),
  keyFeatures: z
    .string()
    .describe('Key features of the business.'),
});
export type GenerateBusinessPlanInput = z.infer<typeof GenerateBusinessPlanInputSchema>;

const GenerateBusinessPlanOutputSchema = z.object({
  businessPlan: z
    .string()
    .describe('A comprehensive business plan for the business idea.'),
});
export type GenerateBusinessPlanOutput = z.infer<typeof GenerateBusinessPlanOutputSchema>;

export async function generateBusinessPlan(
  input: GenerateBusinessPlanInput
): Promise<GenerateBusinessPlanOutput> {
  return generateBusinessPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBusinessPlanPrompt',
  input: {schema: GenerateBusinessPlanInputSchema},
  output: {schema: GenerateBusinessPlanOutputSchema},
  prompt: `You are an AI business plan generator. You will generate a comprehensive business plan based on the business idea, target audience, and key features provided by the user.\n\nBusiness Idea: {{{businessIdea}}}\nTarget Audience: {{{targetAudience}}}\nKey Features: {{{keyFeatures}}}\n\nBusiness Plan:`,
});

const generateBusinessPlanFlow = ai.defineFlow(
  {
    name: 'generateBusinessPlanFlow',
    inputSchema: GenerateBusinessPlanInputSchema,
    outputSchema: GenerateBusinessPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
