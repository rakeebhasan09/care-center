"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// Get All Services
export const getServices = async () => {
	const products = await dbConnect(collections.SERVICES).find().toArray();
	return products;
};

// Get Single Service
export const getSingleService = async (serviceId) => {
	const query = { _id: new ObjectId(serviceId) };
	const service = await dbConnect(collections.SERVICES).findOne(query);
	return service;
};
