"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Loader2 } from "lucide-react";
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
import { toast } from "sonner";
import { useState } from "react";
import  { UpdateTask } from "../../actions/creat-actions";
import EmojiPicker from "emoji-picker-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

export const formSchema = z.object({
  title: z.string().min(1, {
    message: "Please choose an icon of your task",
  }),
  description: z.string().min(2, {
    message: "Enter Amount",
  }),
  amountSpent: z.coerce.number().min(6, {
    message: "Please enter and amount",
  }),
  totalbalance: z.coerce.number().min(0, {
    message: "Please enter and amount",
  }),
  notes: z.string().min(2, {
    message: "enter notes"
  }),
  id: z.string().min(0, {
    message: "enter notes"
  })
});
export function EditTasks() {
  const [emoji, setEmoji] = useState("😊");
  const [enterEmoji, setEnterEmoji] = useState(false);
  const router = useRouter()

  const [loading, setLoadin] = useState(false);
  const [closePage, setClosePage] = useState(true);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      id: "",
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
      const { success, error } = await UpdateTask(values);
      
      if (!success) {
        toast.error(String(error));
      } else {
        toast.success("Updated Successfull");
        setClosePage(false);
        router.push("/dashboard")
      }
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
      <Dialog >
        <DialogTrigger asChild>
          <Button >
           Edit <Edit className="text-sm"/> 
          </Button>
        </DialogTrigger>
        {closePage && (
          <>
            {" "}
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Your Task</DialogTitle>
                <DialogDescription>
                  Add New activities and click save when done
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emoji</FormLabel>
                        <FormControl>
                          <div>
                            <Button
                              className="cursor-pointer"
                              onClick={() => setEnterEmoji(!enterEmoji)}
                            >
                              {field.value || emoji}
                            </Button>

                            {enterEmoji && (
                              <div className="absolute z-50">
                                <EmojiPicker
                                  onEmojiClick={(e) => {
                                    setEmoji(e.emoji);
                                    field.onChange(e.emoji); // ✅ Update form value
                                    setEnterEmoji(false); // setting of the emoji to disabled when click
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="More about your task"
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
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
