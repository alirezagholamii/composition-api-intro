
export default function useSortList() {
    const sort = (list) => {
        list.value.sort((a, b) => a.name.localeCompare(b.name));
    }

    return {
        sort
    }

}