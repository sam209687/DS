import { z } from "zod";

export const verifySchema = z.object({
    code : z.string().length(6, "Code must be in 6 digits")
})