// Trend-forecaster.ts
'use server';

/**
 * @fileOverview Predicts trending products using AI to help merchants adjust inventory and marketing strategies.
 *
 * - predictTrendingProducts - A function that predicts trending products.
 * - PredictTrendingProductsInput - The input type for the predictTrendingProducts function.
 * - PredictTrendingProductsOutput - The return type for the predictTrendingProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PredictTrendingProductsInputSchema = z.object({
  historicalSalesData: z
    .string()
    .describe(
      'Historical sales data as a JSON string, including product names, sales quantities, and dates.'
    ),
  currentInventory: z
    .string()
    .describe(
      'Current inventory levels as a JSON string, including product names and quantities.'
    ),
  marketTrends: z
    .string()
    .describe(
      'Recent market trends as a JSON string, including product categories, search volumes, and social media mentions.'
    ),
});

export type PredictTrendingProductsInput = z.infer<
  typeof PredictTrendingProductsInputSchema
>;

const PredictTrendingProductsOutputSchema = z.object({
  trendingProducts: z
    .array(z.string())
    .describe('An array of product names that are predicted to be trending.'),
  reasoning: z
    .string()
    .describe(
      'The AI reasoning behind the predicted trending products, referencing the provided data.'
    ),
});

export type PredictTrendingProductsOutput = z.infer<
  typeof PredictTrendingProductsOutputSchema
>;

export async function predictTrendingProducts(
  input: PredictTrendingProductsInput
): Promise<PredictTrendingProductsOutput> {
  return predictTrendingProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'predictTrendingProductsPrompt',
  input: {schema: PredictTrendingProductsInputSchema},
  output: {schema: PredictTrendingProductsOutputSchema},
  prompt: `You are an AI assistant that analyzes e-commerce data to predict trending products for merchants.

  Analyze the provided historical sales data, current inventory levels, and recent market trends to identify products that are likely to be trending in the near future.

  Consider factors such as sales growth, inventory availability, and market demand to make your predictions.

  Provide a list of trending product names and a detailed explanation of your reasoning.

  Historical Sales Data: {{{historicalSalesData}}}
Current Inventory: {{{currentInventory}}}
Market Trends: {{{marketTrends}}}`,
});

const predictTrendingProductsFlow = ai.defineFlow(
  {
    name: 'predictTrendingProductsFlow',
    inputSchema: PredictTrendingProductsInputSchema,
    outputSchema: PredictTrendingProductsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
