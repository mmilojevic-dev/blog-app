import React from 'react'

interface UseSearch {
  searchTerm: string
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const useSearch = (): UseSearch => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleSearchChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value.toLowerCase())
    },
    []
  )

  return { searchTerm, handleSearchChange }
}
