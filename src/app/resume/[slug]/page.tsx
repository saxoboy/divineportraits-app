"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TotalPriceMaternity from "@/components/total-price-maternity";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  phone: z
    .string()
    .min(7, { message: "El teléfono debe tener al menos 7 dígitos" }),
});

type FormData = z.infer<typeof formSchema>;

interface SessionPageProps {
  params: {
    slug: string;
  };
}

const ResumePage: FC<SessionPageProps> = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  if (!slug) {
    router.push("/");
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };
  return (
    <section className="flex flex-col justify-start items-center gap-4 container py-4">
      <header>
        <h1 className="text-4xl font-bold text-center my-4">
          Patricia Carrozini Photography
        </h1>
      </header>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 container py-4">
        <div className="p-4 bg-white rounded shadow-md dark:bg-slate-700">
          <h2 className="text-2xl font-semibold my-4">Resume Session</h2>
          <p className="pb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            omnis modi magni debitis, sunt mollitia nam voluptate suscipit
            consectetur cupiditate beatae obcaecati, nihil nobis! Ratione
            necessitatibus natus dolorem quos eum.
          </p>
          <Separator />
          <div className="mb-12 mx-auto flex justify-center">
            <TotalPriceMaternity slug={slug} />
          </div>
          <Separator />

          <div className="max-w-3xl mx-auto py-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Full Name</FormLabel> */}
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campo Correo */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Correo Electronico</FormLabel> */}
                      <FormControl>
                        <Input
                          placeholder="Your email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campo Teléfono */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Telefono</FormLabel> */}
                      <FormControl>
                        <Input type="tel" placeholder="Your phone" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Botón Enviar */}
                <Button type="submit" className="mt-4">
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
