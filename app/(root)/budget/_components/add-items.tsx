"use client";

import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

export const formSchema = z.object({
  title: z.string().min(1, {
    message: "Please choose an icon of your task",
  }),
  description: z.string().min(2, {
    message: "Enter Amount",
  }),
  amountSpent: z.coerce.number().min(3, {
    message: "Please enter and amount",
  }),
  totalbalance: z.coerce.number().min(0, {
    message: "Please enter and amount",
  }),
  notes: z.string().min(2, {
    message: "enter notes"
  }),
  
});
export function Additems() {


  const [loading, setLoadin] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      notes: "",
      description: "",
      amountSpent: 0,
      totalbalance: 0,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoadin(true)
    try {
     
      
    } catch (error) {
      console.log(error);

    } finally {

      setLoadin(false);
    }

    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log( values); 
     

  }
  return (
    <>
      
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="More about your Expense"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amountSpent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            disabled={loading}
                            placeholder="Input Amount"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Side Notes</FormLabel>
                        <FormControl>
                        <Textarea
                  placeholder="Enter Notes"
                  className="resize-none"  disabled={loading}

                  {...field}
                />

                          
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="totalbalance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="bg-green-800 rounded px-2 p-2 text-white font-semibold text-sm">Deposite Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            disabled={loading}
                            placeholder="Input Amount"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={loading}
                    type="submit"
                    className="w-full cursor-pointer"
                  >
                    Add Item
                    {loading && <Loader2 className=" animate-spin " />}
                  </Button>
                </form>
              </Form>
              </>
              )
            }
