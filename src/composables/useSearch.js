import { ref, computed } from 'vue'

export default function useSearch(originalList) {
    const searchedWord = ref("");

    const matchingSearchQuery = computed(() => {
        return originalList.value.filter(item => item.name.includes(searchedWord.value))
    })

    const upperCaseSearchedWord = computed(() =>
        searchedWord.value.toUpperCase()
    );

    return {
        upperCaseSearchedWord,
        searchedWord,
        matchingSearchQuery
    }


}