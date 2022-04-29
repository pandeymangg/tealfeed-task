import { logos, teamMap } from "data";
import useTeam from "hooks/useTeam";
import Image from "next/image";
import React from "react";
import * as S from "./TableRow.style";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { Cancel, Check } from "static/icons";

interface ITableRowProps {
  teamName: string;
  teamNumber: number;
}

const TableRow = ({ teamName, teamNumber }: ITableRowProps) => {
  const {
    matchesPlayed,
    matchesLost,
    matchesWon,
    totalPoints,
    lastFiveMatchesData,
  } = useTeam(teamName);

  const teamInitial = teamMap[teamName];
  const logo = logos?.[teamInitial];

  return (
    <S.TableRowWrapper>
      <S.RowName>
        <span>{teamNumber}</span>
        <Image src={logo} alt={teamName} height={24} width={24} />
        <span>{teamInitial}</span>
      </S.RowName>
      <S.RowInfo>
        <span>{matchesPlayed}</span>
        <span>{matchesWon}</span>
        <span>{matchesLost}</span>
        <span>{totalPoints}</span>
        <div className="last_5__result_container">
          {lastFiveMatchesData?.map((data, index) => (
            <span key={index}>{data.won ? <Check /> : <Cancel />}</span>
          ))}
        </div>
      </S.RowInfo>
    </S.TableRowWrapper>
  );
};

export default TableRow;