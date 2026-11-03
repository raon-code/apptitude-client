import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import Nav from '@/components/Nav';
import Title from '@/components/Title';
import BattleRecordList from '@/components/info/BattleRecordList';
import ProfileSummary from '@/components/info/ProfileSummary';
import { Content, Screen } from '@/components/ui/Screen';
import { BATTLE_RECORDS, PROFILE } from '@/features/info/fixtures';
import { colors, radius, space } from '@/styles/tokens';

const TABS = [
  { key: 'victory', label: '승리' },
  { key: 'tie', label: '무승부' },
  { key: 'defeat', label: '패배' }
];

const TabBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${space(2.75)};
  width: 100%;
  height: 51px;
  margin-top: ${space(10)};
  padding: ${space(1.5)};
  border-radius: ${radius.sm};
  background: ${colors.surface};
`;

const Tab = styled.button`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${space(1)};
`;

const Indicator = styled(motion.span)`
  position: absolute;
  inset: 0;
  border-radius: ${radius.sm};
  background: ${colors.bg};
`;

const TabLabel = styled.span`
  position: relative;
  color: ${colors.text};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  opacity: ${({ $dim }) => ($dim ? 0.2 : 1)};
`;

const TabCount = styled.span`
  position: relative;
  color: ${colors.accent};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  opacity: ${({ $dim }) => ($dim ? 0.2 : 1)};
`;

const FilterRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${space(4)};
`;

const Switch = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${space(2)};
  cursor: pointer;

  input:focus-visible + span {
    outline: 2px solid ${colors.accent};
    outline-offset: 2px;
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

const Rail = styled.span`
  position: relative;
  display: block;
  width: 48px;
  height: 24px;
  border-radius: ${radius.pill};
  background: ${({ $on }) => ($on ? colors.accent : colors.surface)};
  transition: background 160ms ease;
`;

const Knob = styled.span`
  position: absolute;
  top: 50%;
  left: ${space(1)};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ $on }) => ($on ? colors.text : colors.textSubtle)};
  transform: translate(${({ $on }) => ($on ? '24px' : '0')}, -50%);
  transition:
    transform 160ms ease,
    background 160ms ease;
`;

const FilterText = styled.span`
  color: ${colors.textMuted};
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export default function Info() {
  const [type, setType] = useState('victory');
  const [unrewardedOnly, setUnrewardedOnly] = useState(false);

  const records = BATTLE_RECORDS[type] ?? [];
  const visibleRecords =
    unrewardedOnly && type !== 'tie'
      ? records.filter((record) => record.gift === false)
      : records;

  return (
    <>
      <Screen $nav>
        <Content>
          <Title title='마이페이지' />
          <ProfileSummary profile={PROFILE} />
          <TabBar role='group' aria-label='대결 기록 분류'>
            {TABS.map(({ key, label }) => {
              const active = type === key;

              return (
                <Tab
                  key={key}
                  type='button'
                  aria-pressed={active}
                  onClick={() => setType(key)}
                >
                  {active ? <Indicator layoutId='info-tab' /> : null}
                  <TabLabel $dim={!active}>{label}</TabLabel>
                  <TabCount $dim={!active}>
                    {BATTLE_RECORDS[key].length}
                  </TabCount>
                </Tab>
              );
            })}
          </TabBar>
          {type === 'tie' ? null : (
            <FilterRow>
              <Switch>
                <HiddenInput
                  type='checkbox'
                  checked={unrewardedOnly}
                  onChange={(event) => setUnrewardedOnly(event.target.checked)}
                />
                <Rail $on={unrewardedOnly}>
                  <Knob $on={unrewardedOnly} />
                </Rail>
                <FilterText>미보상만 보기</FilterText>
              </Switch>
            </FilterRow>
          )}
          <BattleRecordList type={type} records={visibleRecords} />
        </Content>
      </Screen>
      <Nav />
    </>
  );
}
