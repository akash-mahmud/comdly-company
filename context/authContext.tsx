import React, { createContext, FC, ReactNode, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useMeCompanyQuery } from '../src/graphql/generated/schema';

export interface IAuthContextProps {
	isAuthorized: boolean;
    user:{
		__typename?: "CompanyUserForResponsce";
		avater?: string | null;
		email?: string | null;
		firstname?: string | null;
		id?: string | null;
		lastname?: string | null;
		role?: string | null;
		status: string;
		phoneNumber?: string | null;
		company?: {
			__typename?: "Company";
			id: string;
			fetaureImage: string;
			buisnessCategoryId?: string | null;
			logo: string;
			name: string;
			slug: string;
		} | null;
	} | null | undefined


    loading: boolean;
    authorize(): void;
    unauthorize(): void;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthContextProviderProps {
	children: ReactNode; 
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
	// @ts-ignore

	const {data , loading, refetch} = useMeCompanyQuery()



	const value = useMemo(
		() => ({
			isAuthorized: data?.meCompany?.id?true:false,
			user: data?.meCompany,
			loading,
			authorize() {
			  refetch()
			},
			unauthorize() {
		
			  //? call server logout and all localstorage and cookie clear function
		
		
			},

		}),
		[data, loading],
	);
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
