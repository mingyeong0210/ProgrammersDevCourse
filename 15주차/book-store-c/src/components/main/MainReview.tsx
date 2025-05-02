import { BookReviewItem as IBookReviewItem } from "@/models/book.model";
import styled from "styled-components";
import BookReviewItem from "../book/BookReviewItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Props {
    reviews: IBookReviewItem[];
}

function MainReview({ reviews }: Props) {
    const { isMobile } = useMediaQuery();

    const sliderSettings = {
        dots: true, // 하단에 페이지네이션처럼 점으로 보여지는 것
        infinite: true, // 오른쪽으로 넘길 때 계속 넘어가도록 설정
        speed: 500,
        slidesToShow: isMobile ? 1 : 3, // 한번에 보여질 수
        slidesToScroll: isMobile ? 1 : 3, // 한번 누를 때 몇개씩 슬라이드 될 것인지
        gap: 16,
    }
    return(
        <MainReviewStyle>
            <Slider {...sliderSettings}>
                {reviews.map((review) => (
                    <BookReviewItem key={review.id} review={review} />
                ))}
            </Slider>
        </MainReviewStyle>
    )
}

const MainReviewStyle = styled.div`
    padding: 0 0 24px 0;

    .slick-track {
        padding: 12px 0;
    }

    .slick-slide  > div {
        margin: 0 12px;
    }

    .slick-prev::before,
    .slick-next::before {
        color: #000;
    }

    @media ${({ theme }) => `screen and ${theme.mediaQuery.mobile}`} {
        .slick-prev {
            left: 0;
        }
        .slick-next {
            right: 0;
        }
    }
`;

export default MainReview;