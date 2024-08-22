import { z } from 'zod';
import { message } from 'antd';

export const URL_SCHEMA = z.string()
    .min(1, { message: "URL cannot be empty" })
    .url({ message: "Invalid URL format" });


export const validateMail = (input: string) => {
    const result = URL_SCHEMA.safeParse(input);

    if (!result.success) {
        message.error(result.error.errors[0].message);
        return false;
    } else {
        return true;
    }
}