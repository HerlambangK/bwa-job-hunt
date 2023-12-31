import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from 'bcryptjs'
import { CompanyType, JobType, categoryJobType, optionType } from "@/types"
import { supabasePublicUrl } from "./supabase"
import dayjs from 'dayjs'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hasPassword =async (password:string) => {
  const hasedPassword = await bcrypt.hash(password, 8)
  return hasedPassword
}

export const comparePassword = async (password:string, hasedPassword:string) => {
  const isMatch = await bcrypt.compare(password, hasedPassword)
  return isMatch
}

export async function fetcher<JSON = any>(
	input: RequestInfo,
	init?: RequestInit
): Promise<JSON> {
	const res = await fetch(input, init);

	return res.json() as Promise<JSON>;
}

export const parsingCategories= ( data:any, isLoading:boolean, error:any) =>{
  if(!isLoading&& !error && data){
      return data.map((item:any) => {
        return {
          id:item.id,
          name:item.name,
          totalJobs:item._count.Job
        }
      })  as categoryJobType[];
  }
  return []
}

export const parsingJobs = async(
  data:any, 
  isLoading:boolean, 
  error:any
) => {
  if (!isLoading && !error && data){
    return await Promise.all(
      data.map(async(item:any) => {
        let imageName = item.Company?.CompanyOverview[0]?.image
        let ImageUrl ;

        if(imageName){
          ImageUrl = await supabasePublicUrl(imageName, 'company')
        }else{
          ImageUrl = '/images/company.png'
        }
      const job:JobType ={
        id:item.id,
        name:item.roles,
        applicants:item.applicants,
        category:item.CategoryJob,
        description:item.description,
        image:ImageUrl,
        jobType:item.jobType,
        location:item.Company?.CompanyOverview[0]?.location,
        needs:item.needs,
        type: item.CategoryJob?.name,
        skills:item.requiredSkills
					
      }
      return job
    }) 
    )
    
    
  }
  return []
}


export const parsingCompanies = async(
  data:any, 
  isLoading:boolean, 
  error:any
) => {
  if (!isLoading && !error && data){
    return await Promise.all(
      data.map(async(item:any) => {
        let imageName = item.CompanyOverview[0]?.image
        let ImageUrl ;

        if(imageName){
          ImageUrl = await supabasePublicUrl(imageName, 'company')
        }else{
          ImageUrl = '/images/company.png'
        }

        const companyDetail = item.CompanyOverview[0]
      const company:CompanyType ={
        id:item.id,
        name:companyDetail?.name,
        image:ImageUrl,
        dateFounded:companyDetail?.dateFounded,
        description:companyDetail?.description,
        employee:companyDetail?.employee,
        industry:companyDetail?.industry,
        location:companyDetail?.location,
        techStack:companyDetail?.techStack,
        website:companyDetail?.website,
        sosmed:item.CompanySosialMedia[0],
				teams:item.CompanyTeam,
        totalJobs:item._count.Job
      }
      return company
    }) 
    )
    
    
  }
  return []
}




export const parsingCategoriesToOptions = ( 
  data:any, 
  isLoading:boolean, 
  error:any , 
  isIndustry?:boolean) => {

    if(!isLoading && !error && data){
    return data.map((item:any)=> {
        return{
          id: isIndustry ? item.name : item.id,
          label:item.name,
        } as optionType
    }) as optionType[]
  }
  return [];
};


export const dateFormat = (date:Date | string , format:string = 'DD MMMM YYYY') => {
  return dayjs(date).format(format)
}