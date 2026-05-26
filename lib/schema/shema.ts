import {z} from 'zod'

export const carSchema = z.object({
    brand: z.string().min(1,'Min character 1').max(20,'Max character 20')
                                .regex(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,'Only letters from 1 to 20 characters' ),
    price: z.number().min(0,'Min character 0').max(1000000,'Max character 1000000'),
    year: z.number().min(1990,"Min year can be 1990").max(2026,"Max year can be 2026")
})

export type CarFormData = z.infer<typeof carSchema>