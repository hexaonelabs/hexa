export interface IDatastoreService {
  getData<T>(family: string, tags: string[], data?: T): Promise<T>;
  loadData(streamId: string): Promise<{
    _id: string;
  }>;
  saveData<T>(
    data: T,
    family: string,
    tags: string[]
  ): Promise<
    {
      _id: string;
    } & T
  >;
}
