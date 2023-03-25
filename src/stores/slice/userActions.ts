import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (page?: number) => {
    const pageNumber = page ?? 1;
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${pageNumber}&results=10`
    );

    const users = data.results.map((user: any) => {
      const fullname = `${user.name.title} ${user.name.first} ${user.name.last}`;
      return {
        key: user.login.uuid,
        fullname,
        username: user.login.username,
        thumbnail: user.picture.thumbnail,
      };
    });
    return users;
  }
);
