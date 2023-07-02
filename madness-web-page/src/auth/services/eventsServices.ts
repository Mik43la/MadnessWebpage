import { StrapiResponse } from '../models/strapiModel';
import axios from 'axios';
import { EventModel, EventGet } from "../models/event";

export const eventsServices = {


    async getEvents(token: string, currentPage: number, totaItems: number): Promise<StrapiResponse<EventGet[]>> {
        const url = `http://localhost:1337/api/events`;
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
    async postEvents(token: string, code: EventModel) {
        const url = `http://localhost:1337/api/events`;
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
    async putEvent(token: string, code: EventModel, idEvent: number): Promise<StrapiResponse<EventGet>> {
        const url = `http://localhost:1337/api/events/${idEvent}`;
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
    async deleteEvent(token: string, code: string) {
        const url = `http://localhost:1337/api/events/${code}`;
        const response = await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async getEvent(token: string, id: number): Promise<StrapiResponse<EventGet>> {
        const url = `http://localhost:1337/api/events/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        
        });
        return response.data;
    },
};