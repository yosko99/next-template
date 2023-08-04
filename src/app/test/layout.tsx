import React from 'react';

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateMetadata = async (
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const id = params.id;

  // fetch data
  const product = await fetch('url').then((res) => res.json());

  return {
    title: product.title
  };
};

const TestLayout = async ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default TestLayout;
