"use client";

import { useState } from "react";
import style from "@/components/users/post-grid.module.css";
import styles from "@/app/page.module.css";
import MealItem from "./user-items";

const UsersGrid = ({ users }) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = users?.filter(
    (meal) =>
      meal.name.toLowerCase().includes(search.toLowerCase()) ||
      meal.email.toLowerCase().includes(search.toLowerCase()) ||
      meal.company?.name.toLowerCase().includes(search.toLowerCase())
  );
  const sortedMeals = [...filteredUsers]?.sort((a, b) => {
    let fieldA = sortBy === "name" ? a.name : a.company?.name;
    let fieldB = sortBy === "name" ? b.name : b.company?.name;

    if (!fieldA || !fieldB) return 0;

    return sortOrder === "asc"
      ? fieldA.localeCompare(fieldB)
      : fieldB.localeCompare(fieldA);
  });
  return (
    <>
      <header className={styles.header}>
        <div className={styles.h_main}>
          <div className={styles.hero}>
            <h1>All Users</h1>
          </div>

          <div className={styles.search_box}>
            <div className={styles.ser_select}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="name">Sort by Name</option>
                <option value="company">Sort by Company</option>
              </select>
              <button
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
                className={styles.sortButton}
              >
                {sortOrder === "asc" ? "⬆" : "⬇"}
              </button>
            </div>
            <input
              type="text"
              placeholder="Search users by name/email/company"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>
      <ul className={style.meals}>
        {sortedMeals?.length > 0 ? (
          sortedMeals?.map((meal) => (
            <li key={meal.id}>
              <MealItem {...meal} />
            </li>
          ))
        ) : (
          <li>
            <p>No users found</p>
          </li>
        )}
      </ul>
    </>
  );
};

export default UsersGrid;
