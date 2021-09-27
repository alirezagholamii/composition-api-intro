import { ref, computed } from 'vue'

export default function useSearch(originalList) {
    const searchedWord = ref("");

    const matchingSearchQuery = computed(() => {
        return originalList.value.filter(item => item.name.includes(searchedWord.value))
    })

    const searchedWordUppercase = computed(() =>
        searchedWord.value.toUpperCase()
    );

    return {
        searchedWordUppercase,
        searchedWord,
        matchingSearchQuery
    }


}