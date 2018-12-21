export default class ApplicationUseCase {
    public initialize = ( completion: (error?: Error) => void ) => {
        // completion( Error("これはダミーのエラーです。") )
        completion( null )
    }
}
