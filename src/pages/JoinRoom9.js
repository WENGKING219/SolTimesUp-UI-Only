import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const JoinRoom9 = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/home-page1");
  }, [navigate]);

  const onDayContainerClick = useCallback(() => {
    navigate("/join-room-8");
  }, [navigate]);

  const onMinsContainerClick = useCallback(() => {
    navigate("/join-room-10");
  }, [navigate]);

  const onPlaceBidButtonClick = useCallback(() => {
    navigate("/payment-1");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/join-room-2");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 809px;
        overflow: hidden;
        background-image: url("/schedule@3x.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        text-align: center;
        font-size: 23.45px;
        color: var(--white);
        font-family: var(--font-space-grotesk);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 37px;
          left: 24px;
          width: 56.36px;
          height: 79.63px;
          cursor: pointer;
        `}
        onClick={onBackContainerClick}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-71xl);
            background-color: var(--color-whitesmoke-100);
            width: 56.36px;
            height: 79.63px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 26.85px;
            left: 20.26px;
            width: 25.54px;
            height: 26.85px;
            overflow: hidden;
          `}
          alt=""
          src="/materialsymbolsarrowbackiosrounded5.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 37px;
          left: 292px;
          width: 56.36px;
          height: 79.63px;
          object-fit: cover;
        `}
        alt=""
        src="/profile@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 342px;
          left: 303px;
          width: 42px;
          height: 238px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-mid);
          color: var(--color-slategray);
        `}
      >
        <div
          className={css`
            border-radius: var(--br-71xl);
            background-color: var(--color-mediumspringgreen);
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-mini) var(--padding-5xs);
            box-sizing: border-box;
            cursor: pointer;
          `}
          onClick={onDayContainerClick}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <b
              className={css`
                position: relative;
              `}
            >
              01
            </b>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              font-size: 10.09px;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              hour
            </div>
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-71xl);
            background: linear-gradient(180deg, #ff6d03, #14f195);
            border: 1.5px solid var(--white);
            box-sizing: border-box;
            width: 42px;
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-mini) var(--padding-5xs);
            color: var(--white);
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <b
              className={css`
                position: relative;
              `}
            >
              02
            </b>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              font-size: 10.09px;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              hours
            </div>
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-71xl);
            background-color: var(--color-mediumseagreen-100);
            width: 42px;
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-mini) var(--padding-5xs);
            box-sizing: border-box;
            cursor: pointer;
          `}
          onClick={onMinsContainerClick}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <b
              className={css`
                position: relative;
              `}
            >
              03
            </b>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              font-size: 10.09px;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              hours
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 497px;
          left: 24px;
          border-radius: var(--br-181xl);
          background-color: var(--color-aquamarine);
          backdrop-filter: blur(17px);
          width: 104px;
          height: 178px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-6xl) var(--padding-xl);
          box-sizing: border-box;
          font-size: var(--font-size-17xl);
          color: var(--color-slategray);
        `}
      >
        <div
          className={css`
            position: relative;
            width: 67px;
            height: 143px;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: 67px;
              left: 4.5px;
              display: inline-block;
              width: 58px;
              height: 47px;
            `}
          >
            0.2
          </b>
          <b
            className={css`
              position: absolute;
              top: 114px;
              left: 5.5px;
              font-size: var(--btn-large-normal-size);
              line-height: 13px;
              display: inline-block;
              background: linear-gradient(180deg, #bd95ff, #193376);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              width: 55px;
              height: 29px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              7%
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              Return
            </p>
          </b>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 202.53px;
              background-color: var(--color-gray-1000);
              backdrop-filter: blur(13px);
              width: 67px;
              height: 67px;
            `}
          />
          <img
            className={css`
              position: absolute;
              top: 23px;
              left: 20.5px;
              width: 25px;
              height: 22px;
              overflow: hidden;
            `}
            alt=""
            src="/solanalogomark-1.svg"
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 704px;
          left: 48px;
          border-radius: 109.41px;
          background-color: var(--color-gray-1100);
          backdrop-filter: blur(15.8px);
          border: 1px solid var(--color-dimgray-200);
          box-sizing: border-box;
          width: 280px;
          height: 57px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0px var(--padding-19xl) 0px var(--padding-22xl);
          cursor: pointer;
          font-size: 18.24px;
        `}
        onClick={onPlaceBidButtonClick}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 19.45098114013672px;
            z-index: 0;
          `}
        >
          <b
            className={css`
              position: relative;
            `}
          >
            Swipe to pay
          </b>
        </div>
        <img
          className={css`
            position: absolute;
            margin: 0 !important;
            top: 8px;
            left: 10px;
            border-radius: 217.81px;
            width: 41px;
            height: 41px;
            overflow: hidden;
            flex-shrink: 0;
            object-fit: cover;
            z-index: 1;
          `}
          alt=""
          src="/frame-41@2x.png"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 127px;
          left: 26px;
          width: 322px;
          height: 195px;
        `}
        alt=""
        src="/group-221.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 630px;
          left: 233px;
          border-radius: var(--br-181xl);
          background-color: var(--color-mediumseagreen-200);
          backdrop-filter: blur(17px);
          width: 112px;
          height: 45px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-3xs) var(--padding-16xl);
          box-sizing: border-box;
          font-size: var(--font-size-7xl);
        `}
      >
        <div
          className={css`
            width: 95px;
            height: 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              width: 86px;
              height: 31px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <b
              className={css`
                position: relative;
              `}
            >
              ROOM 1
            </b>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          height: 6.8%;
          width: 36.53%;
          top: 42.27%;
          right: 57.07%;
          bottom: 50.93%;
          left: 6.4%;
          backdrop-filter: blur(0px);
          cursor: pointer;
          font-size: var(--btn-large-normal-size);
        `}
        onClick={onGroupContainer1Click}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/vector2.svg"
        />
        <b
          className={css`
            position: absolute;
            top: 5px;
            left: 26px;
          `}
        >
          4-6 People
        </b>
        <b
          className={css`
            position: absolute;
            top: 28px;
            left: 13px;
            color: var(--color-gray-1200);
          `}
        >
          Tap to change
        </b>
      </div>
      <img
        className={css`
          position: absolute;
          top: 369px;
          left: 91px;
          width: 148px;
          height: 237px;
        `}
        alt=""
        src="/frame-209.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 367px;
          left: 239px;
          width: 40px;
          height: 40px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 40px;
            height: 40px;
            object-fit: cover;
          `}
          alt=""
          src="/image-418@2x.png"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 410px;
          left: 157px;
          width: 40px;
          height: 40px;
        `}
        alt=""
        src="/frame-2061.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 497px;
          left: 157px;
          width: 40px;
          height: 40px;
        `}
        alt=""
        src="/frame-2071.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 584px;
          left: 157px;
          width: 40px;
          height: 40px;
        `}
        alt=""
        src="/frame-2081.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 454px;
          left: 239px;
          width: 40px;
          height: 40px;
        `}
        alt=""
        src="/frame-2101.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 539px;
          left: 239px;
          width: 40px;
          height: 40px;
        `}
        alt=""
        src="/frame-2051.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 373px;
          left: 245px;
          border-radius: var(--br-81xl);
          width: 28px;
          height: 28px;
          overflow: hidden;
        `}
        alt=""
        src="/milo.svg"
      />
    </div>
  );
};

export default JoinRoom9;
