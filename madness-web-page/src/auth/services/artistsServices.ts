import { StrapiResponse } from '../models/strapiModel';
import axios from 'axios';
import { ArtistModel, ArtistGet } from "../models/artist";

export const artistService = {


    async getArtists(token: string, currentPage: number, totaItems: number): Promise<StrapiResponse<ArtistGet[]>> {
        const url = `http://localhost:1337/api/artists`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                'populate': '*',
                'pagination[page]': currentPage,
                'pagination[pageSize]': totaItems,
            }
        });
        return response.data;
    },
    async postArtist(token: string, code: ArtistModel) {
        const url = `http://localhost:1337/api/artists`;
        const response = await axios.post(
            url,
            { data: code },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    },
    async putArtist(token: string, code: ArtistModel, idArtist: number): Promise<StrapiResponse<ArtistGet>> {
        const url = `http://localhost:1337/api/artists/${idArtist}`;
        const response = await axios.put(
            url,
            { data: code },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    },
    async deleteArtist(token: string, code: string) {
        const url = `http://localhost:1337/api/artists/${code}`;
        const response = await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async getArtist(token: string, id: number): Promise<StrapiResponse<ArtistGet>> {
        const url = `http://localhost:1337/api/artists/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
         /*   params: {
                'populate[comments][populate][0]': "users_permissions_user",
                'populate[users_permissions_user][populate][0]': '*',
                'populate[downvotes][populate][0]': "downvotes",
                'populate[upvotes][populate][0]': "upvotes",

            },*/
        });
        return response.data;
    },
};