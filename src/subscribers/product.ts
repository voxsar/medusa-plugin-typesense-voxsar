import { 
	ProductService,
	type SubscriberConfig, 
	type SubscriberArgs, 
  } from "@medusajs/medusa";
import TypesenseService from "../services/typesense";
  
  export default async function productUpdateHandler({ 
	data, eventName, container, pluginOptions, 
  }: SubscriberArgs<Record<string, any>>) {
	const productService: ProductService = container.resolve(
	  "productService"
	)
	const typesenseService: TypesenseService = container.resolve(
	  "typesenseService"
	)
  
	const { id } = data
  
	const product = await productService.retrieve(id)

	//console.log("Product updated", product)
  
	// do something with the product...
  }
  
  export const config: SubscriberConfig = {
	event: ProductService.Events.UPDATED,
	context: {
	  subscriberId: "product-update-typesense-handler",
	},
  }