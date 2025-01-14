import { TeacherInfoSection } from '@/components/sections/department/TeacherInfoSection'
import { DepartmentHistorySection } from '@/components/sections/department/history/DepartmentHistorySection'
import { BaseLayout } from '@/components/base/layout/BaseLayout'

export const metadata = {
  title: 'АГНИ - Автоматизация - Наша кафедра',
  description:
    'Веб-приложение специально для Кафедры Автоматизации и ИТ - АГНИ',
}

export default function DepartmentPage() {
  return (
    <BaseLayout>
      <TeacherInfoSection />
      <DepartmentHistorySection />
    </BaseLayout>
  )
}
