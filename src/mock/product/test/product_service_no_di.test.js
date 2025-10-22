// mock을 남용하는 사례
const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// 가짜를 사용할거야
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  });
  let productService;
  beforeEach(() => {
    productService = new ProductService();
    // mockClear가 false인 경우(수동적으로 관리)
    // fetchItems.mockClear();
    // ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});