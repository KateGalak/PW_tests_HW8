import { test, expect } from "@playwright/test";

test("get product", async ({ request }) => {
  const response = await request.get("/products/1");
  expect(response).toBeOK();
});

test("search for products(pagination)", async ({ request }) => {
  const response = await request.get("/products", {
    params: {
      limit: 10,
      skip: 10,
      select: "title",
    },
  });
  console.log(await response.json());
  expect(response).toBeOK();
});

test("create user", async ({ request }) => {
  const response = await request.post("/products/add", {
    data: {
      title: "UserName_QA",
    },
  });
  expect(response.status()).toBe(200);
  console.log(await response.json());
});

test("update user", async ({ request }) => {
  const response = await request.put("/products/1", {
    data: {
      title: "iPhone 11",
      price: 999,
    },
    headers: { "Content-Type": "application/json" },
  });
  console.log(await response.json());
  expect(response).toBeOK();
});

test("patch user", async ({ request }) => {
  const response = await request.patch("/products/1", {
    data: {
      title: "iPhone 13Pro",
      price: 1350,
      stock: 666,
    },
  });
  console.log(await response.json());
  console.log(await response.status());
  expect(response).toBeOK();
});

test("delete user", async ({ request }) => {
  const response = await request.delete("/products/1", {
    data: {
      id: 2,
    },
  });
  console.log(await response.status());
  expect(response).toBeOK();
});
