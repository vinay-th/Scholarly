'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { GraduationCap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  stuName: z.string().min(1, 'Name is required'),
  hscMarks: z.string().min(1, 'HSC marks are required'),
  sscMarks: z.string().min(1, 'SSC marks are required'),
  graduationMarks: z.string().min(1, 'Graduation marks are required'),
  casteCategory: z.string().min(1, 'Caste category is required'),
  otherDetails: z.string(),
});

export default function ScholarshipForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stuName: '',
      hscMarks: '',
      sscMarks: '',
      graduationMarks: '',
      casteCategory: '',
      otherDetails: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    router.push('/results');
  }

  return (
    <div className="relative min-h-screen p-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="accent-box bg-[#FFD700] -rotate-12 top-12 left-12" />
      <div className="accent-box bg-[#FF69B4] rotate-12 top-24 right-12" />
      <div className="accent-box bg-[#98FB98] rotate-45 bottom-12 left-24" />
      <div className="accent-box bg-[#87CEEB] -rotate-45 bottom-24 right-24" />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="p-4 bg-[#FF3333] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tight bg-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Scholarship Application
          </h1>
        </div>

        <div className="neo-brutal-container p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="stuName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold bg-[#b16fe0] px-2 border-2 border-black inline-block">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="string"
                        placeholder="Enter your Name"
                        className="neo-brutal-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#FF3333] font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hscMarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold bg-[#FFD700] px-2 border-2 border-black inline-block">
                      HSC Marks
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your HSC marks"
                        className="neo-brutal-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#FF3333] font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sscMarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold bg-[#FF69B4] px-2 border-2 border-black inline-block">
                      SSC Marks
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your SSC marks"
                        className="neo-brutal-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#FF3333] font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="graduationMarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold bg-[#98FB98] px-2 border-2 border-black inline-block">
                      Graduation Marks
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your graduation marks"
                        className="neo-brutal-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#FF3333] font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="casteCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold bg-[#87CEEB] px-2 border-2 border-black inline-block">
                      Caste Category
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="neo-brutal-input">
                          <SelectValue placeholder="Select your caste category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-[#FF3333] font-medium" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="otherDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-bold bg-white px-2 border-2 border-black inline-block">
                      Other Relevant Details
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter any other relevant details"
                        className="neo-brutal-input min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-[#FF3333] font-medium" />
                  </FormItem>
                )}
              />

              <Button type="submit" className="neo-brutal-button w-full">
                Submit Application
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
