import { useEffect, useState, useMemo } from "react";
import styles from "./Catalog.module.css";
import cn from "classnames";
import Headling from "../../components/Headling/Headling";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchProducts } from "../../store/product.slice";
import { RootState } from "../../store/store";
import Card from "../../components/Card/Card";
import BaseButton from "../../components/BaseButton/BaseButton";
import Search from "../../components/Search/Search";
import { SortType } from "../../components/Sorting/Sort.props";
import Sort from "../../components/Sorting/Sort";

function Catalog() {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState<SortType>("lowest");
  const { items, loading, searchQuery } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredAndSortedProducts = useMemo(() => {
    // Фильтрация
    const filtered = items.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Сортировка
    if (sortType === "lowest") {
      return filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "highest") {
      return filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [items, searchQuery, sortType]);

  const itemsPerPage = 14;
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedProducts, currentPage, itemsPerPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const placeholders = Array.from({ length: 14 }, (_, i) => (
    <div key={i} className={cn(styles["card"], styles["placeholder"])}>
      <div className={styles["placeholder-square"]} />
    </div>
  ));

  return (
    <section className={cn(styles["catalog"])}>
      <Wrapper>
        <div className={cn(styles["catalog-top"])}>
          <Headling>Catalog</Headling>
          <div className={cn(styles["catalog-control"])}>
            <Sort value={sortType} onChange={setSortType} />
            <Search />
          </div>
        </div>
        {loading ? (
          <div className={cn(styles["catalog-wrapper"])}>{placeholders}</div>
        ) : (
          <div className={cn(styles["catalog-wrapper"])}>
            {currentProducts.map((p) => (
              <Card
                className={cn(styles["card"])}
                id={p.id}
                image={p.image?.[0]}
                name={p.name}
                price={p.price}
                key={p.id}
                stock={p.stock}
              />
            ))}
          </div>
        )}

        {/* Пагинация */}
        <footer>
          <div className={cn(styles["pagination"])}>
            <BaseButton onClick={handlePreviousPage} disabled={currentPage === 1}>
              &lt;
            </BaseButton>
            <span className={cn(styles["current-page"])}>{currentPage}</span>
            <BaseButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              &gt;
            </BaseButton>
          </div>
          <span className={cn(styles["total-page"])}>{totalPages} pages</span>
        </footer>
      </Wrapper>
    </section>
  );
}

export default Catalog;
