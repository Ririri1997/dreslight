export type SortType = "lowest" | "highest";

// Интерфейс для пропсов компонента
export interface SortProps {
  value: SortType; // Текущее значение сортировки
  onChange: (type: SortType) => void; // Функция для изменения сортировки
}