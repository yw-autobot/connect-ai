import { useEffect, useCallback } from 'react';

/**
 * @description 사용자의 중요한 행동(Pain -> Solution)을 추적하는 커스텀 훅입니다.
 * 실제 운영 환경에서는 Google Analytics, Mixpanel 또는 자체 API 호출이 이루어져야 합니다.
 * 여기서는 로컬 콘솔에 로그를 남기는 형태로 시뮬레이션합니다.
 */
export const useConversionTracker = (eventKey: string, value1?: any, value2?: any) => {
    useEffect(() => {
        console.log(`[🎯 CONVERSION TRACKER] Event Triggered: ${eventKey}`);
        if (value1 !== undefined && value2 !== undefined) {
             console.log(`  | Details: Value1=${JSON.stringify(value1)}, Value2=${JSON.stringify(value2)}`);
        }
    }, [eventKey, value1, value2]);

    // 실제 구현 시에는 API 호출 로직이 들어갑니다.
};