import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus } from "lucide-react" 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 


 
const formSchema = z.object({
    title: z.string().min(2, {
        message: "Please enter the title of your task"
    }), 
    amountSpend: z.coerce.number().min(2, {
        message: "Enter Amount"
    })
  })
export function CreateDialog() {
      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      amountSpend: 0
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className="border h-full text-black hover:text-white text-pretty hover:shadow-xl cursor-pointer rounded bg-secondary flex-col flex px-3 items-center justify-center text-sm">
                <Plus/>
       Create New Task

              </Button>   
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Your Task</DialogTitle>
          <DialogDescription>
            Add New activities and click save when done 
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="What do you want to do?" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="amountSpend"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type="" placeholder="Amount to be spent?" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  
      </DialogContent>
    </Dialog>
  )
}
