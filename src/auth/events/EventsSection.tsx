"use client";
import { DataGrid, GridRowId, GridPaginationModel } from '@mui/x-data-grid';
import { createFakeServer } from '@mui/x-data-grid-generator';
import { useEffect, useMemo, useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import { Button } from '@mui/material';

const PAGE_SIZE = 10;

const SERVER_OPTIONS = {
  useCursorPagination: true,
};

const { useQuery, ...data } = createFakeServer({}, SERVER_OPTIONS);

function EventsSection() {

    const mapPageToNextCursor = useRef<{ [page: number]: GridRowId }>({});

    const [paginationModel, setPaginationModel] = useState({
      page: 0,
      pageSize: PAGE_SIZE,
    });
  
    const queryOptions = useMemo(
      () => ({
        cursor: mapPageToNextCursor.current[paginationModel.page - 1],
        pageSize: paginationModel.pageSize,
      }),
      [paginationModel],
    );
    const { isLoading, rows, pageInfo } = useQuery(queryOptions);
  
    const handlePaginationModelChange = (newPaginationModel: GridPaginationModel) => {
      // We have the cursor, we can allow the page transition.
      if (
        newPaginationModel.page === 0 ||
        mapPageToNextCursor.current[newPaginationModel.page - 1]
      ) {
        setPaginationModel(newPaginationModel);
      }
    };
  
    useEffect(() => {
      if (!isLoading && pageInfo?.nextCursor) {
        // We add nextCursor when available
        mapPageToNextCursor.current[paginationModel.page] = pageInfo?.nextCursor;
      }
    }, [paginationModel.page, isLoading, pageInfo?.nextCursor]);

    const [rowCountState, setRowCountState] = useState(
      pageInfo?.totalRowCount || 0,
    );
    useEffect(() => {
      setRowCountState((prevRowCountState) =>
        pageInfo?.totalRowCount !== undefined
          ? pageInfo?.totalRowCount
          : prevRowCountState,
      );
    }, [pageInfo?.totalRowCount, setRowCountState]);
  
    const columns = [
        {...pageInfo},
        {
          field: 'actions',
          headerName: 'Actions',
          width: 200,
          renderCell: (params) => (
            <div>
              <Button onClick={() =>{/**/ }}>Edit</Button>
              <Button onClick={() => {/**/ }}>Delete</Button>
            </div>
          ),
        },
      ];

    return(
        <>
       
        <div  style={{ height: 550, width: '100%', padding:'10px' }}>
        <DataGrid
            
           {...data}
           rows={rows}
          
           
            
            pageSizeOptions={[PAGE_SIZE]}
            rowCount={rowCountState}
            paginationMode="server"
            onPaginationModelChange={handlePaginationModelChange}
            paginationModel={paginationModel}
            loading={isLoading}
            experimentalFeatures={{ columnGrouping: true }}
            checkboxSelection
            disableRowSelectionOnClick
        />
         
        </div>
        </>
    );
}
export default EventsSection;