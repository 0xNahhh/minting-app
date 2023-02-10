import { 
  getApprovalTxsDocument, 
  getApprovalTxsQueryVariables, 
  getApprovalTxsQuery, 

  getApprovalForAllTxsDocument, 
  getApprovalForAllTxsQueryVariables, 
  getApprovalForAllTxsQuery, 

  getMintCostUpdatedTxsDocument, 
  getMintCostUpdatedTxsQueryVariables, 
  getMintCostUpdatedTxsQuery, 

  getOwnershipTransferredTxsDocument, 
  getOwnershipTransferredTxsQueryVariables, 
  getOwnershipTransferredTxsQuery, 

  getTransferTxsDocument, 
  getTransferTxsQueryVariables, 
  getTransferTxsQuery, 

  execute 
} from '../../../.graphclient'

export const getApprovalTxs = async (filter?: getApprovalForAllTxsQueryVariables): Promise<getApprovalForAllTxsQuery> => {
  const { data, errors } = await execute(getApprovalTxsDocument, filter || {})

  return data
}

export const getApprovalForAllTxs = async (filter?: getApprovalForAllTxsQueryVariables): Promise<getApprovalForAllTxsQuery> => {
  const { data, errors } = await execute(getApprovalForAllTxsDocument, filter || {})

  return data
}

export const getMintCostUpdatedTxs = async (filter?: getMintCostUpdatedTxsQueryVariables): Promise<getMintCostUpdatedTxsQuery> => {
  const { data, errors } = await execute(getMintCostUpdatedTxsDocument, filter || {})

  return data
}

export const getOwnershipTransferredTxs = async (filter?: getOwnershipTransferredTxsQueryVariables): Promise<getOwnershipTransferredTxsQuery> => {
  const { data, errors } = await execute(getOwnershipTransferredTxsDocument, filter || {})

  return data
}

export const getTransferTxs = async (filter?: getTransferTxsQueryVariables): Promise<getTransferTxsQuery> => {
  const { data, errors } = await execute(getTransferTxsDocument, filter || {})

  return data
}

// import { useQuery } from 'wagmi'
// const useSubgraph = () => {
//   const { data, error, isLoading } = useQuery(['getApprovalTxs', getApprovalTxsFilter], getApprovalTxs)

//   return { data, error, isLoading }
// }