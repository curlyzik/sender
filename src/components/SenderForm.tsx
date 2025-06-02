"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  tokenAddress: z.string().startsWith("0x", "Must start with 0x"),
  recipients: z.string().min(1, "Recipients required"),
  amounts: z.string().min(1, "Amounts required"),
});

export default function SenderForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tokenAddress: "",
      recipients: "",
      amounts: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-2xl border-blue-500 border-2 ring-4 ring-blue-500/25">
        <CardContent className="p-6 pt-0">
          <div className="mb-6">
            <h1 className="text-xl font-bold">t-sender</h1>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="tokenAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token address</FormLabel>
                    <FormControl>
                      <Input placeholder="0x" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recipients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Recipients (comma or new line separated)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="0x123..., 0x456"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amounts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Amounts (wei; comma or new line separated)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="100, 200, 300"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="border p-4 rounded bg-gray-100">
                <h2 className="text-base mb-3">Transaction details</h2>
                <div className="flex justify-between">
                  <div className="space-y-1 text-sm text-gray-700">
                    <div>Token name</div>
                    <div>Amount (wei)</div>
                    <div>Amount (tokens)</div>
                  </div>
                  <div className="text-right space-y-1 text-sm text-gray-900">
                    <div>USDC</div>
                    <div>600</div>
                    <div>0.0000006</div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Send Tokens
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
