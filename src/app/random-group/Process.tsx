"use client";

import css from "./Process.module.css";

import GroupsFactory from "./modules/GroupsFactory";
import { GROUP_SIZE_RANGE, MEMBERS } from "./modules/config";

export function Process({ randomSeed }: { randomSeed: number }) {
  const f = new GroupsFactory({
    origins: MEMBERS,
    group_size: GROUP_SIZE_RANGE,
    random_seed: randomSeed,
  });

  console.log(f);
  f.create();

  const groups = f._groups;

  return (
    <div className={css.wrap}>
      <h2>관계형 랜덤 점심 조 추첨 시스템</h2>
      {f._has_error ? (
        <div className={css.error}>
          조합에 실패 하였습니다. 3초 후 다시 시도합니다.
        </div>
      ) : (
        <ul className={css.group_list}>
          {groups.map((group) => (
            <li key={group.group_no} className={css.group_card}>
              <strong className={css.group_tit}>{group.group_no}조</strong>
              <div className={css.group_cont}>
                {group.members.map((member) => (
                  <div key={member.id} className={css.member_card}>
                    <div>
                      <b className={css.member_name}>{member.name}</b>
                      <p className={css.member_chapter}>
                        {member.chapter.toUpperCase()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
