/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetAd($id: ID!) {\n    ad(id: $id) {\n      id\n      title\n      price\n      description\n      owner\n      createdAt\n    }\n  }\n": types.GetAdDocument,
    "\n  query GetAdsForCategory($category: Float) {\n    ads(category: $category) {\n      id\n      title\n      price\n    }\n  }\n": types.GetAdsForCategoryDocument,
    "\n  query GetAdsHomePage {\n    ads {\n      id\n      title\n      price\n    }\n  }\n": types.GetAdsHomePageDocument,
    "\n  mutation CreateAdForm(\n    $title: String!\n    $owner: String!\n    $price: Float!\n    $categoryId: Int!\n    $description: String!\n  ) {\n    createAd(\n      title: $title\n      owner: $owner\n      price: $price\n      categoryId: $categoryId\n      description: $description\n    ) {\n      id\n    }\n  }\n": types.CreateAdFormDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAd($id: ID!) {\n    ad(id: $id) {\n      id\n      title\n      price\n      description\n      owner\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetAd($id: ID!) {\n    ad(id: $id) {\n      id\n      title\n      price\n      description\n      owner\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAdsForCategory($category: Float) {\n    ads(category: $category) {\n      id\n      title\n      price\n    }\n  }\n"): (typeof documents)["\n  query GetAdsForCategory($category: Float) {\n    ads(category: $category) {\n      id\n      title\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAdsHomePage {\n    ads {\n      id\n      title\n      price\n    }\n  }\n"): (typeof documents)["\n  query GetAdsHomePage {\n    ads {\n      id\n      title\n      price\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateAdForm(\n    $title: String!\n    $owner: String!\n    $price: Float!\n    $categoryId: Int!\n    $description: String!\n  ) {\n    createAd(\n      title: $title\n      owner: $owner\n      price: $price\n      categoryId: $categoryId\n      description: $description\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateAdForm(\n    $title: String!\n    $owner: String!\n    $price: Float!\n    $categoryId: Int!\n    $description: String!\n  ) {\n    createAd(\n      title: $title\n      owner: $owner\n      price: $price\n      categoryId: $categoryId\n      description: $description\n    ) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;