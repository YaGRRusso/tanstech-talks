import { tryCatch } from '@/helpers/tryCatch'
import { useQuery } from '@tanstack/react-query'

const API_URL = 'https://jsonplaceholder.typicode.com'

type PostProps = {
  body: string
  id: number
  title: string
  userId: number
}

type UseListPostsInputProps = {
  page?: number
  limit?: number
}

export const useListPosts = (data: UseListPostsInputProps = { limit: 1, page: 1 }) => {
  return useQuery<PostProps[]>({
    queryKey: ['posts', data],
    queryFn: async () => {
      const response = await tryCatch(fetch(`${API_URL}/posts?_page=${data.page}&_limit=${data.limit}`))
      if (response) return await response.json()
    },
  })
}

type UseGetPostInputProps = { id: string }

export const useGetPost = (data: UseGetPostInputProps) => {
  return useQuery<PostProps>({
    queryKey: ['posts', data],
    queryFn: async () => {
      const response = await tryCatch(fetch(`${API_URL}/posts/${data.id}`))
      if (response) return await response.json()
    },
  })
}
