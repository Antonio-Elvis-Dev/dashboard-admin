import { Router } from "express";

import multer from "multer";

import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetaillUserController } from "./controllers/users/DetaillUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetaillOrderController } from "./controllers/order/DetaillOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";
import { ListAllProductsController } from "./controllers/product/ListAllProductsController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp")); //pode ser passado como um middleware
// ROTAS DE USUARIO

router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetaillUserController().handle); //passando middleware na rota

// ROTAS DE CATEGORY
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
); // passando o middleware pq so logados podem criar categorias
router.get("/category", isAuthenticated, new ListCategoryController().handle);

// ROTAS PRODUCT

router.post(
  "/product",
  isAuthenticated,

  new CreateProductController().handle
);

router.get('/products', isAuthenticated, new ListAllProductsController().handle)

// router.post(
//   "/teste",
//   isAuthenticated,

//   new CreateProductController().handle
// );

router.get(
  "/category/product",
  isAuthenticated,
  new ListByCategoryController().handle
);

// ROTAS ORDER

router.post("/order", isAuthenticated, new CreateOrderController().handle);
router.delete("/order", isAuthenticated, new RemoveOrderController().handle);

router.post("/order/add", isAuthenticated, new AddItemController().handle);
router.delete(
  "/order/remove",
  isAuthenticated,
  new RemoveItemController().handle
);

router.put("/order/send", isAuthenticated, new SendOrderController().handle);
router.get("/orders", isAuthenticated, new ListOrderController().handle);
router.get(
  "/order/detail",
  isAuthenticated,
  new DetaillOrderController().handle
);

router.put(
  "/order/finish",
  isAuthenticated,
  new FinishOrderController().handle
);
export { router };
