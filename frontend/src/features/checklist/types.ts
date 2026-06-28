export interface ChecklistItem{
    id: number;
    text: string;
    completed: boolean;
}
 export interface ChecklistSection {
    id: number;
    title: string;
    color: string;
    items: ChecklistItem[];
 }

 export interface Checklist{
    id: number;
    title: string;
    createdAt: string;
    sections: ChecklistSection[];
 }