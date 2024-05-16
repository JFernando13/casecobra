'use server'
import { db } from '@/db'
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from '@prisma/client'

export interface SaveConfigArgs {
  color: CaseColor
  material: CaseMaterial
  finish: CaseFinish
  model: PhoneModel
  configId: string
}

export const saveConfig = async ({
  configId,
  color,
  material,
  finish,
  model
}: SaveConfigArgs) => {
  await db.configuration.update({
    where: {
      id: configId
    },
    data: {
      color,
      material,
      finish,
      model
    }
  })
}
