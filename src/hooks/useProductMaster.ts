import { useQuery } from '@tanstack/react-query'
import { QueryKeyEnum } from '../modals/enum'
import endpoints from '../api/endpoints/endpoints'
import { IProductMaster } from '../components/Product/type'

export interface IProductOutput {
    loading: boolean
    refetch: () => void
    totalResults: number
    results: IProductMaster[]
}

export function useProductMaster({
    payload
}: any): any {
    const tenantId = 10;
    debugger
    const { isLoading, isFetching, data, refetch } = useQuery(
        [QueryKeyEnum.getProductQuery, tenantId],
        () => {
            return endpoints.getProductMaster(tenantId, payload)
        }
    )

    return {
        loading: isLoading || isFetching,
        refetch,
        data
    }
}