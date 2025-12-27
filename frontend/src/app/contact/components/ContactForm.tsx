'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { projectTypes, initialFormData } from './contact-data'
import BudgetSlider from './BudgetSlider'
import Button from '@/components/reuseables/Button'


// Form validation schema
const formSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    workEmail: z.string().email('Please enter a valid email address'),
    projectType: z.string().min(1, 'Please select a project type'),
    budget: z.number().min(0).max(100),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
    onSubmit?: (data: FormData) => void
    isLoading?: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({
    onSubmit,
    isLoading = false
}) => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: initialFormData
    })

    const budgetValue = watch('budget')

    const handleFormSubmit = (data: FormData) => {
        console.log('Form submitted:', data)
        onSubmit?.(data)
        // Here you would typically send the data to your backend
        // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    }

    return (
        <div className="glassmorphism-card rounded-xl p-6 sm:p-8 space-y-6">
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <label className=" text-base font-medium leading-normal pb-2">
                            Full Name *
                        </label>
                        <input
                            {...register('fullName')}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-text-secondary px-4 text-base font-normal leading-normal"
                            placeholder="Enter your full name"
                            type="text"
                        />
                        {errors.fullName && (
                            <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col">
                        <label className=" text-base font-medium leading-normal pb-2">
                            Work Email *
                        </label>
                        <input
                            {...register('workEmail')}
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg h-12 placeholder:text-text-secondary px-4 text-base font-normal leading-normal"
                            placeholder="Enter your work email"
                            type="email"
                        />
                        {errors.workEmail && (
                            <p className="text-red-400 text-sm mt-1">{errors.workEmail.message}</p>
                        )}
                    </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col">
                    <label className=" text-base font-medium leading-normal pb-2">
                        Project Type *
                    </label>
                    <select
                        {...register('projectType')}
                        className="form-input flex w-full min-w-0 flex-1 appearance-none resize-none overflow-hidden rounded-lg  h-12 bg-card-bg bg-no-repeat bg-right px-4 text-base font-normal leading-normal"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239a90cb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 0.5rem center',
                            backgroundSize: '1.5em 1.5em',
                        }}
                    >
                        {projectTypes.map((type) => (
                            <option key={type.id} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    {errors.projectType && (
                        <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                    )}
                </div>

                {/* Budget Slider */}
                <BudgetSlider
                    value={budgetValue}
                    onChange={(value) => setValue('budget', value)}
                />

                {/* Message */}
                <div className="flex flex-col">
                    <label className=" text-base font-medium leading-normal pb-2">
                        Your Message *
                    </label>
                    <textarea
                        {...register('message')}
                        className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg placeholder:text-text-secondary p-4 text-base font-normal leading-normal"
                        placeholder="Describe your project goals, timeline, and any specific requirements..."
                        rows={4}
                    />
                    {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="gradient"
                    fullWidth
                    size="lg"
                    className="hover:opacity-90 transition-opacity"
                    disabled={isLoading}
                    leftIcon={
                        isLoading ? (
                            <span className="material-symbols-outlined animate-spin">refresh</span>
                        ) : (
                            <span className="material-symbols-outlined">send</span>
                        )
                    }
                >
                    {isLoading ? 'Submitting...' : 'Submit Request'}
                </Button>
            </form>
        </div>
    )
}

export default ContactForm