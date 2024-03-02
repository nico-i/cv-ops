import type { CVData as BaseCVData, Config } from "./types";

export interface CVData extends BaseCVData {}

export async function loader({ source }: Config<CVData>): CVData {


}


export function render(data: CVData, template: string)