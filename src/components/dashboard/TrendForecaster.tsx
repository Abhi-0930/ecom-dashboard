"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { predictTrendingProducts, type PredictTrendingProductsInput, type PredictTrendingProductsOutput } from "@/ai/flows/trend-forecaster";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Lightbulb, AlertTriangle } from "lucide-react";
import { z } from "zod";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  historicalSalesData: z.string().min(1, "Historical sales data is required.").refine(value => {
    try { JSON.parse(value); return true; } catch { return false; }
  }, { message: "Invalid JSON format for historical sales data." }),
  currentInventory: z.string().min(1, "Current inventory data is required.").refine(value => {
    try { JSON.parse(value); return true; } catch { return false; }
  }, { message: "Invalid JSON format for current inventory." }),
  marketTrends: z.string().min(1, "Market trends data is required.").refine(value => {
    try { JSON.parse(value); return true; } catch { return false; }
  }, { message: "Invalid JSON format for market trends." }),
});

const placeholderHistoricalSalesData = JSON.stringify([
  {"productId": "P001", "productName": "Wireless Mouse", "unitsSold": 120, "saleDate": "2023-10-01"},
  {"productId": "P002", "productName": "Mechanical Keyboard", "unitsSold": 75, "saleDate": "2023-10-05"},
  {"productId": "P001", "productName": "Wireless Mouse", "unitsSold": 90, "saleDate": "2023-11-01"}
], null, 2);

const placeholderCurrentInventory = JSON.stringify([
  {"productId": "P001", "productName": "Wireless Mouse", "quantity": 250},
  {"productId": "P002", "productName": "Mechanical Keyboard", "quantity": 150},
  {"productId": "P003", "productName": "27-inch Monitor", "quantity": 80}
], null, 2);

const placeholderMarketTrends = JSON.stringify([
  {"trend": "Increased demand for ergonomic office accessories", "source": "Industry Report Q3 2023"},
  {"keyword": "Wireless peripherals", "searchVolumeIncrease": "20%", "period": "Last 30 days"},
  {"socialSentiment": "Positive for compact mechanical keyboards", "platform": "Tech Forums"}
], null, 2);


const TrendForecaster = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictTrendingProductsOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<PredictTrendingProductsInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      historicalSalesData: placeholderHistoricalSalesData,
      currentInventory: placeholderCurrentInventory,
      marketTrends: placeholderMarketTrends,
    },
  });

  const onSubmit: SubmitHandler<PredictTrendingProductsInput> = async (data) => {
    setIsLoading(true);
    setPredictionResult(null);
    setError(null);
    try {
      const result = await predictTrendingProducts(data);
      setPredictionResult(result);
      toast({
        title: "Trend Prediction Successful",
        description: "AI has analyzed the data and provided predictions.",
        variant: "default",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Prediction Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          AI Trend Forecaster
        </CardTitle>
        <CardDescription>
          Leverage AI to predict upcoming product trends based on your sales, inventory, and market data. 
          Please provide data in JSON format.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormField
                control={form.control}
                name="historicalSalesData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Historical Sales Data (JSON)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter historical sales data as JSON..." {...field} className="h-48 font-mono text-xs" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentInventory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Inventory (JSON)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter current inventory data as JSON..." {...field} className="h-48 font-mono text-xs" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="marketTrends"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Market Trends (JSON)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter market trends data as JSON..." {...field} className="h-48 font-mono text-xs" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Predicting...
                </>
              ) : (
                "Predict Trends"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {error && (
        <CardContent>
          <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="font-semibold">Error Predicting Trends</h3>
            </div>
            <p className="text-sm mt-1">{error}</p>
          </div>
        </CardContent>
      )}

      {predictionResult && (
        <CardContent className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Prediction Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Trending Products</CardTitle>
              </CardHeader>
              <CardContent>
                {predictionResult.trendingProducts.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {predictionResult.trendingProducts.map((product, index) => (
                      <li key={index} className="text-sm">{product}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No specific trending products identified.</p>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Reasoning</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <p className="text-sm whitespace-pre-wrap">{predictionResult.reasoning}</p>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default TrendForecaster;
