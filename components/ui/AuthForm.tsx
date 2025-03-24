"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "./button"
import { Form } from "./form"
import FormField from "./FormField" // Corrected import


import Image from 'next/image'
import Link from 'next/link'

import { toast } from 'sonner'

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  })
}

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === 'sign-in') {
        console.log("Sign-in", values)
      } else {
        console.log("Sign-up", values)
      }
    } catch (error) {
      console.log(error)
      toast.error(`Error: ${error}`)
    }
  }

  const isSignIn = type === "sign-in"
  // Removed unused variable


  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" width={38} height={32} alt="logo" />
          <h2 className='text-primary-100'>Ai interview Mocker</h2>
        </div>
        <h3>Practice job interview with AI</h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            {!isSignIn && (
            <FormField // Correct usage of FormField

                control={form.control}
                name="name"
                label='name'
                placeholder="John Doe"
              />
            )}
            <p>Email</p>
            <p>Password</p>
            <Button className='btn' type="submit">{isSignIn ? 'Sign-in' : 'Create an Account'}</Button>
          </form>
        </Form>
        <p className='text-center'>{
          isSignIn ? "Don't have an account?" : "Already have an account?"
        }
          <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className='font-bold text-user-primary ml-1'> {!isSignIn ? 'Sign-in' : 'Sign-up'}</Link>
        </p>
      </div>
    </div>
  )
}

export default AuthForm
