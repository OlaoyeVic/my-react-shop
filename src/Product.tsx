import { type } from 'os'
import * as React from 'react'
import { IProduct, products } from './ProductData'
import Tabs from './Tabs'
import withLoader from './withLoader'

interface ILikeState {
    likes: number
    lastLike: Date | null
}

const initialLikeState: ILikeState = {
    likes: 0,
    lastLike: null
}

enum LikeActionTypes {
    LIKE = "LIKE"
}

interface ILikeAction {
    type: LikeActionTypes.LIKE
    now: Date
}

interface IProps {
    product?: IProduct
    inBasket: boolean
    onAddToBasket: () => void
}

type LikeActions = ILikeAction

const reducer = (state: ILikeState = initialLikeState, action: LikeActions) => {
    switch (action.type) {
        case LikeActionTypes.LIKE:
            return { ...state, likes: state.likes + 1, lastLike: action.now }
    }
    return state
}

const Product: React.SFC<IProps> = props => {
    const [{ likes, lastLike }, dispatch]: [
        ILikeState,
        (action: ILikeAction) => void
    ] = React.useReducer(reducer, initialLikeState)

    const product = props.product

    const handleAddClick = () => {
        props.onAddToBasket()
    }

    const handleLikeClick = () => {
        dispatch({ type: LikeActionTypes.LIKE, now: new Date() })
    }
    if (!product) {
        return null
    }
    return (
        <React.Fragment>
            <h1>{product.name}</h1>
            <Tabs>
                <Tabs.Tab name="Description" initialActive={true} heading={() => <b>Description</b>}>
                    <p>{product.description}</p>
                </Tabs.Tab>
                <Tabs.Tab name="Reviews" heading={() => "Reviews"}>
                    <ul className="product-reviews">
                        {product.reviews.map(review => (
                            <li key={review.reviewer}>
                                <i>"{review.comment}"</i> - {review.reviewer}
                            </li>
                        ))}
                    </ul>
                </Tabs.Tab>
            </Tabs>
            <p className="product-price">
                {new Intl.NumberFormat("en-US", {
                    currency: "USD",
                    style: "currency"
                }).format(product.price)}
            </p>
            {!props.inBasket && (
                <button onClick={handleAddClick}>Add to basket</button>
            )}
            <div className='like-container'>
                {likes > 0 && (
                    <div>{`I like this x ${likes}, last at ${lastLike}`}</div>
                )}
                <button onClick={handleLikeClick}>
                    {likes > 0 ? "Like again" : "Like"}
                </button>
            </div>
        </React.Fragment>
    )
}
export default Product