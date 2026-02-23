import { WithTimePeriod, WithTitle, WithURL } from "@/config/types"

export interface JobItem extends WithTitle, WithTimePeriod, WithURL {
    role: string
    description: string
}

export const jobs: JobItem[] = []
