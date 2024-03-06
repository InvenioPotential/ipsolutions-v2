
export async function getSelections() {
    try {
        const response = await fetch("/api/selection");
        const selectionData = await response.json();

        //console.log(data);

        return selectionData;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
